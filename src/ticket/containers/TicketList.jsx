/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react';
import { Button, Spinner } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link, useNavigate } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';
import TicketTable from "../components/TicketTable";

import getTickets from '../services/getTickets';

const TicketList = props => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState({
    listTicket: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [ticketData, setTicketData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prev => ({...prev, listTicket: true}));
        const { data: ticketData } = await getTickets();
        setTicketData(ticketData.data || []);
      } finally {
        setIsLoading(prev => ({...prev, listTicket: false}));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Tickets");
  }, [setTitle]);
  
  const handleAddTicket = () => {
    navigate("/ticket/add");
  };

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            <Link to="/ticket/add">
              <Button className="p-2" variant="primary">
                Tambah
              </Button>
            </Link>
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      <Layouts.ListContainerTableLayout
        title={"List Ticket"}
        singularName={"Ticket"}
        items={ticketData}
        isLoading={isLoading.listTicket}
        tableHeaders={[
          { id: "eventName", label: "Event Name" },
          { id: "ticketName", label: "Ticket Name" },
          { id: "price", label: "Price" },
          { id: "availability", label: "Availability" },
          { id: "actions", label: "Actions" }
        ]}
        actions={(item) => (
          <div className="flex gap-2 flex-wrap">
            <Link to={`/ticket/${item.id}`}>
              <Button variant="primary" size="sm">Detail</Button>
            </Link>
          </div>
        )}
      >
        <TicketTable 
          ticketData={ticketData}
        />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default TicketList; 