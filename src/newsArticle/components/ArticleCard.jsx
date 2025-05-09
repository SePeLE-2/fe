/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const ArticleCard = ({ listArticle,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listArticle]}
  	
  	itemsAttrs={[
          {
            id: "articletitle",
            condition: "",
            label: "article title",
  		  featureName: "invalid",
            editable: false
          }
,
          {
            id: "articledate",
            condition: "",
            label: "article date",
  		  featureName: "invalid",
            editable: false
          }
  ,
          {
            id: "articleauthor",
            condition: "",
            label: "article author",
  		  featureName: "invalid",
            editable: false
          }
  ]}
      itemsEvents={(articleItem) => [
        
        <Link to={`/article/${articleId}`}>
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

export default ArticleCard;
