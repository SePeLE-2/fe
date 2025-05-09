/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import EventTable from "../components/EventTable";

import get<<DataBinding>>EventData from '../services/get<<DataBinding>>EventData'
const Event = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	<<List>>Event: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [<<DataBinding>>EventData, set<<DataBinding>>EventData] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, <<List>>Event: true}))
				const { data: <<DataBinding>>EventData } = await get<<DataBinding>>EventData()
				set<<DataBinding>>EventData(<<DataBinding>>EventData.data)
			} finally {
				setIsLoading(prev => ({...prev, <<List>>Event: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Event")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"<<List>> Event"}
	singularName={"Event"}
	items={[<<DataBinding>>EventData]}
	isLoading={isLoading.<<List>>Event}
>
	<EventCard
		<<DataBinding>>EventData={<<DataBinding>>EventData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default Event

