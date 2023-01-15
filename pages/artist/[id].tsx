import axios from "axios";
import { GetServerSideProps } from "next";
import React, { FC } from "react";

const Artist: FC = ({ data }) => {
	return <div>Artist: {data.email}</div>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { params } = ctx;
	const { data } = await axios.get("http://localhost:5050/api/artist/find/" + params.id, {});
	console.log(data);
	return {
		props: {
			data
		}
	};
};

export default Artist;
