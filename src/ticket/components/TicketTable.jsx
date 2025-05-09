/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";

import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner, TableRow, TableCell } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const TicketTable = ({ ticketData }) => {
  const { checkPermission } = useAuth();
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <>
      {ticketData && ticketData.length > 0 ? (
        ticketData.map((ticket) => (
          <TableRow key={ticket.id} distinct={false}>
            <TableCell>{ticket.eventName}</TableCell>
            <TableCell>{ticket.ticketName}</TableCell>
            <TableCell>{formatCurrency(ticket.price)}</TableCell>
            <TableCell>{ticket.availability ? "Available" : "Sold Out"}</TableCell>
            <TableCell isHiddenMobile>
              <div className="flex btn-group gap-2 flex-wrap">
                <Link to={`/ticket/${ticket.id}`}>
                  <Button variant="primary" size="sm">Detail</Button>
                </Link>
              </div>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={5} className="text-center">
            No tickets found
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default TicketTable; 