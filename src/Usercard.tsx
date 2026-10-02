type UserCardProps = {
name1: string;
role: 'admin' | 'user';
verfied: boolean;
}

export const UserCard = ({name1, role, verified}): UserCardProps => {
return (
    <div style = {{
        display: 'flex', 
        gap : '4px'}}>
        <h2>{name1}</h2>
        <p>{role}</p>
        {verified && <span>T</span>}
    </div>
);
}