/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const EventTable = ({ <<DataBinding>>EventData,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[<<DataBinding>>EventData]}
  	  itemsAttrs={[
          {
            id: "<<VisualisationAttribute>>Name:String",
            condition: "",
            label: "<<VisualisationAttribute>> Name: String",
  		  featureName: "invalid",
            editable: false
          }
  ,
          {
            id: "<<VisualisationAttribute>>Date:Date",
            condition: "",
            label: "<<VisualisationAttribute>> Date: Date",
  		  featureName: "invalid",
            editable: false
          }
  ,
          {
            id: "<<VisualisationAttribute>>Location:String",
            condition: "",
            label: "<<VisualisationAttribute>> Location: String",
  		  featureName: "invalid",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default EventTable;
