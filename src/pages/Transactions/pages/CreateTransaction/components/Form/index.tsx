import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Button } from '@/components/ui/button.tsx';
import { Form as UIFrom, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import currencies from '@/data/currencies.ts';
import { formatNumber } from '@/lib/utils.ts';
import paths from '@/pages/paths.ts';
import { transactionTypes } from '@/providers/Transactions/constants.ts';
import { Transaction } from '@/providers/Transactions/models.ts';
import useTransactions from '@/providers/Transactions/useTransactions.ts';

const transactionTypesOptions = Object.values(transactionTypes);
const currenciesOptions = currencies;

const schema = z.object({
  transactionType: z.string(),
  currency1: z.preprocess((value) => (value !== '' ? Number(value) : undefined), z.number()),
  currency2: z.preprocess((value) => (value !== '' ? Number(value) : undefined), z.number()),
  rate: z.preprocess(
    (value) => (value !== '' ? Number(value) : undefined),
    z
      .number({
        required_error: 'Це поле є обов’язковим'
      })
      .min(0, 'Курс має бути більше за 0')
  ),
  sum1: z.preprocess(
    (value) => (value !== '' ? Number(value) : undefined),
    z
      .number({
        required_error: 'Це поле є обов’язковим'
      })
      .min(0, 'Сума має бути більша за 0')
  ),
  sum2: z.preprocess(
    (value) => (value !== '' ? Number(value) : undefined),
    z
      .number({
        required_error: 'Це поле є обов’язковим'
      })
      .min(0, 'Сума від клієнта має бути більша за 0')
  ),
  client: z.string().min(1, 'Це поле є обов’язковим'),
  comment: z.string()
});

const Form: React.FC = () => {
  const [, setTransactions] = useTransactions();
  const navigate = useNavigate();

  const form = useForm<Transaction>({
    resolver: zodResolver(schema),
    defaultValues: {
      transactionType: transactionTypesOptions[0].id,
      currency1: currencies[2].id,
      currency2: currencies[0].id,
      rate: 45.9,
      sum1: 100,
      sum2: 4600,
      client: '380',
      comment: ''
    }
  });

  const {
    handleSubmit,
    formState: { errors }
  } = form;

  const { sum1, sum2, rate } = form.getValues();

  const payment = sum1 * rate;

  const change = sum2 - payment;

  const onSubmit = (data: Transaction) => {
    setTransactions((transactions) => [...transactions, { ...data, id: Date.now(), date: new Date().toString() }]);
    navigate(paths.transactions.path);
  };

  return (
    <UIFrom {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Нова транзакція</h2>
        <div className='mt-4 flex w-full gap-2'>
          {[
            { name: 'currency1', label: 'Валюта 1' },
            { name: 'currency2', label: 'Валюта 2' }
          ].map(({ name, label }) => (
            <FormField
              key={name}
              name={name}
              render={({ field }) => {
                const currency = currencies.find(({ id }) => id == field.value);

                return (
                  <FormItem className='flex w-1/2 flex-col'>
                    <Label htmlFor='transactionType'>{label}</Label>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                        <SelectTrigger>
                          <SelectValue placeholder={label} />
                        </SelectTrigger>
                        <SelectContent>
                          {currenciesOptions.map(({ id, name }) => (
                            <SelectItem key={id} value={id.toString()}>
                              {name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <Input readOnly placeholder='Доступно' value={formatNumber(currency?.amount ?? 0)} />
                  </FormItem>
                );
              }}
            />
          ))}
        </div>
        <FormField
          name='transactionType'
          render={({ field }) => (
            <FormItem className='mt-1'>
              <Label htmlFor='transactionType'>Операція</Label>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder='Операція' />
                  </SelectTrigger>
                  <SelectContent>
                    {transactionTypesOptions.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name='sum1'
          render={({ field }) => (
            <FormItem className='mt-1'>
              <Label htmlFor='sum1'>Сума</Label>
              <FormControl>
                <Input inputMode='decimal' {...field} />
              </FormControl>
              {errors.sum1 && <FormMessage>{errors.sum1.message}</FormMessage>}
            </FormItem>
          )}
        />
        <FormField
          name='rate'
          render={({ field }) => (
            <FormItem className='mt-1'>
              <Label htmlFor='sum2'>Курс</Label>
              <FormControl>
                <Input inputMode='decimal' {...field} />
              </FormControl>
              {errors.rate && <FormMessage>{errors.rate.message}</FormMessage>}
            </FormItem>
          )}
        />
        <FormField
          name='sum2'
          render={({ field }) => (
            <FormItem className='mt-1'>
              <Label htmlFor='sum2'>Сума від клієнта</Label>
              <FormControl>
                <Input inputMode='decimal' {...field} />
              </FormControl>
              {errors.sum2 && <FormMessage>{errors.sum2.message}</FormMessage>}
            </FormItem>
          )}
        />
        <FormField
          name='client'
          render={({ field }) => (
            <FormItem className='mt-1'>
              <Label htmlFor='client'>Клієнт</Label>
              <FormControl>
                <Input inputMode='tel' {...field} />
              </FormControl>
              {errors.client && <FormMessage>{errors.client.message}</FormMessage>}
            </FormItem>
          )}
        />
        <FormField
          name='comment'
          render={({ field }) => (
            <FormItem className='mt-1'>
              <Label htmlFor='comment'>Коментар</Label>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              {errors.comment && <FormMessage>{errors.comment.message}</FormMessage>}
            </FormItem>
          )}
        />

        <div className='mt-1 flex scroll-m-20 gap-1 text-sm tracking-tight'>
          Сума до оплати: <b>{formatNumber(payment)}</b>
        </div>

        <div className='mt-1 flex scroll-m-20 gap-1 text-sm tracking-tight'>
          Решта: <b>{formatNumber(change)}</b>
        </div>

        <Button className='my-2 w-full' type='submit'>
          Зберегти
        </Button>
      </form>
    </UIFrom>
  );
};

export default Form;
