import { useState } from 'react'; 
import Currency from './Currency';

export default function FormCurrency() {
    return (
        <div className={styles.wrapper}>
          <div className={styles.currencyCard}>
            <section className={styles.fromCurrency} value={fromCurrency} onChange={handleChange((e) => setFromCurrency(e.target.value))}>
              <option>EUR</option>
              <option>DOLL</option>
              <option>POUNDS</option>
            </section>
            <section className={styles.toCurrency} value={toCurrency} onChange={handleChange((e) => setToCurrency(e.target.value))}>
              <option>EUR</option>
              <option>DOLL</option>
              <option>POUNDS</option>
            </section>
    
          </div>
    
        </div>
      );
}