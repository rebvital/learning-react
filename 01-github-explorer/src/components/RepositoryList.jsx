import { RepositoryItem } from "./RepositoryItem.jsx";

const repository = {
    name: 'nomes dos repositorioioss',
    description: 'descrição do repositorio',
    link: 'github.com'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository = {repository} />
                <RepositoryItem  repository = {repository} />
                <RepositoryItem repository = {repository} />
                <RepositoryItem repository = {repository} />
            </ul>
        </section>
    )
}