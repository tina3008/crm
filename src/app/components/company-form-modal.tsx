'use client';

import React, { createContext, useContext } from 'react';
import CompanyForm from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';

const OnCloseContext = createContext<() => void>(() => {});

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (

    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
