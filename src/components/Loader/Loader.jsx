import { RotatingLines } from 'react-loader-spinner'
import { Div } from './Loader.styled';

export const Loader = () => {
    return (
        <Div>
                    <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />

        </Div>
    )
}