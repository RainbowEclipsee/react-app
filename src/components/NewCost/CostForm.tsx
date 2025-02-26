import React, { useState } from 'react';
import './CostForm.css';
import { Cost } from '../Types/types';

interface CostFormProps {
  onSaveCostFormData: (cost: Omit<Cost, 'id'>) => void;
  onCancel: () => void;
}

const CostForm: React.FC<CostFormProps> = ({ onSaveCostFormData, onCancel }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const setNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const setPriceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const setDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const costData: Omit<Cost, 'id'> = {
      descrition: name,
      price: parseFloat(price),
      date: new Date(date),
    };

    onSaveCostFormData(costData);
    setName('');
    setPrice('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Наименование</label>
          <input type="text" value={name} onChange={setNameHandler} required placeholder="Введите текст"/>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            onChange={setPriceHandler}
            value={price}
            min="0.01"
            step="0.01"
            required
            placeholder="Введите сумму"
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            onChange={setDateHandler}
            value={date}
            min="2023-01-01"
            max="2025-12-31"
            required
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить Расход</button>
          <button type="button" onClick={onCancel}>Отмена</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
