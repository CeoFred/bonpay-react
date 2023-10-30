import React, { ReactNode } from 'react';
import useBonpay from './useBonPay';
import { callback, Config } from './types';

export interface BonpayButtonProps extends Config {
  isProduction?: boolean;
  text?: string;
  className?: string;
  children?: ReactNode;
  onSuccess: callback;
  onClose: callback;
  onError: callback;
}

const BonpayButton = (props: BonpayButtonProps): JSX.Element => {
  const [initializePayment, loaded] = useBonpay(props);

  const handleInit = () => {
    if (loaded){
      initializePayment(props.onSuccess, props.onClose, props.onError)
    }
  }
  return (
    <div>
      <button className={props.className} onClick={handleInit}>
        {props.text || props.children}
      </button>
      </div>
  );
};

export default BonpayButton;
