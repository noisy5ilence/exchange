import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button.tsx';
import { Form as UIFrom, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import currencies from '@/data/currencies.ts';
import { transactionTypes } from '@/providers/Transactions/constants.ts';

const transactionTypesOptions = Object.values(transactionTypes);
const currenciesOptions = currencies;

interface Transaction {
  id: number;
  date: string;
  transactionType: IdName<string>;
  currency1: IdName;
  currency2: IdName;
  rate: number;
  sum1: number;
  sum2: number;
  client: string;
  comment: string;
}

const schema = z.object({
  transactionType: z.object({
    id: z.number(),
    name: z.string()
  }),
  currency1: z.object({
    id: z.number(),
    name: z.string()
  }),
  currency2: z.object({
    id: z.number(),
    name: z.string()
  }),
  rate: z.number().min(0, 'Rate must be positive'),
  sum1: z.number().min(0, 'Sum must be positive'),
  sum2: z.number().min(0, 'Sum must be positive'),
  client: z.string().min(1, 'Client is required'),
  comment: z.string()
});

const Form: React.FC = () => {
  const form = useForm<Transaction>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: Date.now(),
      date: new Date().toString(),
      transactionType: transactionTypesOptions[0],
      currency1: currencies[0],
      currency2: currencies[1],
      rate: 1,
      sum1: 0,
      sum2: 0,
      client: '',
      comment: ''
    }
  });

  const {
    register
    // handleSubmit,
    // formState: { errors },
    // setValue
  } = form;

  // const onSubmit = (data: Transaction) => {
  //   console.log(data);
  // };

  return (
    <UIFrom {...form}>
      <input type='hidden' {...register('id')} />
      <input type='hidden' {...register('date')} />

      <div className='flex w-full gap-2'>
        <div className='flex w-1/2 flex-col gap-2'>
          <FormField
            name='currency1'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor='transactionType'>Валюта 1</Label>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder='Валюта 1' />
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
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='sum1'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Сума 1' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className='flex w-1/2 flex-col gap-2'>
          <FormField
            name='currency2'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor='transactionType'>Валюта 2</Label>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder='Валюта 2' />
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
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='sum2'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Сума 2' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
      <FormField
        name='transactionType'
        render={({ field }) => (
          <FormItem className='mt-2'>
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

      {/*<FormField name='currency1'>*/}
      {/*  <FormItem>*/}
      {/*    <Label htmlFor='currency1'>Currency 1</Label>*/}
      {/*    <FormControl>*/}
      {/*      <Select defaultValue={currencies[0].id} {...register('currency1.id')}>*/}
      {/*        {currencies.map((currency) => (*/}
      {/*          <Option key={currency.id} value={currency.id}>*/}
      {/*            {currency.name}*/}
      {/*          </Option>*/}
      {/*        ))}*/}
      {/*      </Select>*/}
      {/*    </FormControl>*/}
      {/*    {errors.currency1 && <FormMessage>{errors.currency1.message}</FormMessage>}*/}
      {/*  </FormItem>*/}
      {/*</FormField>*/}

      {/*<FormField name='currency2'>*/}
      {/*  <FormItem>*/}
      {/*    <Label htmlFor='currency2'>Currency 2</Label>*/}
      {/*    <FormControl>*/}
      {/*      <Select defaultValue={currencies[1].id} {...register('currency2.id')}>*/}
      {/*        {currencies.map((currency) => (*/}
      {/*          <Option key={currency.id} value={currency.id}>*/}
      {/*            {currency.name}*/}
      {/*          </Option>*/}
      {/*        ))}*/}
      {/*      </Select>*/}
      {/*    </FormControl>*/}
      {/*    {errors.currency2 && <FormMessage>{errors.currency2.message}</FormMessage>}*/}
      {/*  </FormItem>*/}
      {/*</FormField>*/}

      {/*<FormField name='rate'>*/}
      {/*  <FormItem>*/}
      {/*    <Label htmlFor='rate'>Rate</Label>*/}
      {/*    <FormControl>*/}
      {/*      <Input type='number' {...register('rate')} />*/}
      {/*    </FormControl>*/}
      {/*    {errors.rate && <FormMessage>{errors.rate.message}</FormMessage>}*/}
      {/*  </FormItem>*/}
      {/*</FormField>*/}

      {/*<FormField name='sum1'>*/}
      {/*  <FormItem>*/}
      {/*    <Label htmlFor='sum1'>Sum 1</Label>*/}
      {/*    <FormControl>*/}
      {/*      <Input type='number' {...register('sum1')} />*/}
      {/*    </FormControl>*/}
      {/*    {errors.sum1 && <FormMessage>{errors.sum1.message}</FormMessage>}*/}
      {/*  </FormItem>*/}
      {/*</FormField>*/}

      {/*<FormField name='sum2'>*/}
      {/*  <FormItem>*/}
      {/*    <Label htmlFor='sum2'>Sum 2</Label>*/}
      {/*    <FormControl>*/}
      {/*      <Input type='number' {...register('sum2')} />*/}
      {/*    </FormControl>*/}
      {/*    {errors.sum2 && <FormMessage>{errors.sum2.message}</FormMessage>}*/}
      {/*  </FormItem>*/}
      {/*</FormField>*/}

      {/*<FormField name='client'>*/}
      {/*  <FormItem>*/}
      {/*    <Label htmlFor='client'>Client</Label>*/}
      {/*    <FormControl>*/}
      {/*      <Input type='text' {...register('client')} />*/}
      {/*    </FormControl>*/}
      {/*    {errors.client && <FormMessage>{errors.client.message}</FormMessage>}*/}
      {/*  </FormItem>*/}
      {/*</FormField>*/}

      {/*<FormField name='comment'>*/}
      {/*  <FormItem>*/}
      {/*    <Label htmlFor='comment'>Comment</Label>*/}
      {/*    <FormControl>*/}
      {/*      <Textarea {...register('comment')} />*/}
      {/*    </FormControl>*/}
      {/*  </FormItem>*/}
      {/*</FormField>*/}

      <Button className='mt-2' type='submit'>
        Зберегти
      </Button>
    </UIFrom>
  );
};

export default Form;
