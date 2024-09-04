import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error,@typescript-eslint/ban-ts-comment
// @ts-ignore
import {App} from './ui';

const container: HTMLElement = document.getElementById('root')!;

ReactDOM.createRoot(container)
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    .render(<App/>);
