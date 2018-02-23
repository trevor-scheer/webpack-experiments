import styles from '@styles/index';
import styles2 from 'styles!./index2';

const Component = {};
const NewComponent = styles.hoc(Component);
const NewComponent2 = styles2.hoc(Component);
