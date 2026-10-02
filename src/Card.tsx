import {Button} from './Button.tsx'

export const Card = ({children}: React.PropsWithChildren) => {
    return <div className="card">
        <Button />
        <section>{children}</section>
        </div>;
};