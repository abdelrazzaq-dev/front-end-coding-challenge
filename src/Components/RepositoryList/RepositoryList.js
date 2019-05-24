import React, { useState, useContext, useEffect } from "react";
import { RepositoryContext } from "../../Contexts/RepositoryContext";
import Repository from "../Repository/Repository";
import Spinner from "../SharedComponents/Spinner/Spinner";

const RepositoryList = () => {
	const [repositories, setRepositories] = useContext(RepositoryContext);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const getRepositories = async () => {
		setLoading(true);
		const URL = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`;
		fetch(URL)
		.then(response => response.json())
		.then(data => {
			if(data.length) {
				setRepositories(prevState => [...prevState, ...data.items]);
				setPage(prevState => prevState + 1)
			}
			setLoading(false);
		})
		.catch(error => {
			setLoading(false);
		});
	};

	window.onscroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.offsetHeight
		) {
			getRepositories();
		}
	};

	useEffect(() => {
		getRepositories();
	}, []);

	return (
		<div className="container">
			{repositories.map(repository => (
				<Repository
					key={repository.id}
					name={repository.name}
					issues={repository.open_issues_count}
					stars={repository.stargazers_count}
					avatar={repository.owner.avatar_url}
					created_at={repository.created_at}
					owner={repository.owner.login}
					description={repository.description}
				/>
			))}
			<div className={loading === false ? "d-none" : "d-inline"}>
				<Spinner />
			</div>
		</div>
	);
};

export default RepositoryList;
