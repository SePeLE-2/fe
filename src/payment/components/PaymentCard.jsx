/*
  Generated on 09/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PaymentCard = ({ listPayment, }) => {
  const { checkPermission } = useAuth();

  return (
    <Layouts.ListComponentCardLayout
      items={[listPayment]}

      itemsAttrs={[
        {
          id: "amount",
          condition: "",
          label: "amount",
          featureName: "amount",
          editable: false
        }
      ]}
      itemsEvents={(paymentItem) => [

        <Link key={paymentItem.idPayment} to={`/payment/${paymentItem.idPayment}`}>
          <Button
            size="sm"
            variant=
            "primary"
          >
            Detail
          </Button>
        </Link>


      ]}
    />
  )
};

export default PaymentCard;
