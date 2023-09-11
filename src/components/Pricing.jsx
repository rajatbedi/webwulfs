import * as React from 'react';
import '../container/Skills/Skills.scss';
import { motion } from 'framer-motion';

function PricingPage() {
  return (
    <motion.div style={{ padding: '3rem 0', background: '#fff' }}>
      <h2 className="head-text">
        Our Creative <span>Portfolio</span>
      </h2>
      <stripe-pricing-table
        pricing-table-id="prctbl_1NpAmpSEmjt822s10LugAgOX"
        publishable-key="pk_live_51LzVV0SEmjt822s1Z7tpqhYr3es3l77vIFLakhTifknt9JAiL2y0fCrNTXhkwGRQscrM7zDLE90ahl0ccuH1wzKp00ryx56pje"
      />
    </motion.div>
  );
}

export default PricingPage;
