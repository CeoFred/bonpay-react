import React, { ReactNode } from 'react';
import useBonpay from './useBonPay';
import { callback, Config } from './types';

export interface BonpayButtonProps extends Config {
  text?: string;
  className?: string;
  children?: ReactNode;
  onSuccess: callback;
  onClose: callback;
  onError: callback;
}

const BonpayButton = ({
  text,
  className,
  children,
  onSuccess,
  onClose,
  onError,
  ...others
}: BonpayButtonProps): JSX.Element => {
  const initializePayment = useBonpay(others);
  return (
    <div>
      <button className={className} onClick={(): void => initializePayment(onSuccess, onClose, onError)}>
        {text || children}
      </button>
      </div>
  );
};

export default BonpayButton;
