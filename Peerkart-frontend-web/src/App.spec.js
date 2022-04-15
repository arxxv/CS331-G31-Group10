import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from "./redux/store";
import App from './App';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter as Router} from "react-router-dom";
import Sidebar from './compnents/Sidebar';
import CreateOrderModal from './compnents/CreateOrderModal';
import { Modal } from '@mui/material';
import ModalAccepted from './compnents/ModalAccepted';
import ModalTransaction from './compnents/ModalTransaction';
import ProfileDetail from './compnents/ProfileDetails';

describe('App', () => {
	it('should render the site', () => {
		const container = shallow(<Provider store={store}>
            <App />
          </Provider>);
		expect(container).toMatchSnapshot();
});
});

describe('Login', () => {
	it('Login page is rendered', () => {
		const container = shallow(<Router><Login /></Router>);
		expect(container).toMatchSnapshot();
});
});

describe('Register', () => {
	it('Register page is rendered', () => {
		const container = shallow(<Router><Register /></Router>);
		expect(container).toMatchSnapshot();
});
});

describe('Home', () => {
	it('Home page is rendered', () => {
		const container = shallow(<Router><Home /></Router>);
		expect(container).toMatchSnapshot();
});
});

describe('Dashboard', () => {
	it('Dashboard page is rendered', () => {
		const container = shallow(<Router><Dashboard /></Router>);
		expect(container).toMatchSnapshot();
});
});

describe('Sidebar', () => {
	it('Sidebar component is rendered', () => {
		const container = shallow(<Sidebar />);
		expect(container).toMatchSnapshot();
});
});

describe('CreateOrderModal', () => {
	it('CreateOrderModal component is rendered', () => {
		const container = shallow(<Provider store={store}><CreateOrderModal /></Provider>);
		expect(container).toMatchSnapshot();
});
});

describe('Modal', () => {
	it('Modal component is rendered', () => {
		const container = shallow(<Provider store={store}><Modal /></Provider>);
		expect(container).toMatchSnapshot();
});
});

describe('ModalAccepted', () => {
	it('ModalAccepted component is rendered', () => {
		const container = shallow(<Provider store={store}><ModalAccepted /></Provider>);
		expect(container).toMatchSnapshot();
});
});

describe('ModalTransaction', () => {
	it('ModalTransaction component is rendered', () => {
		const container = shallow(<Provider store={store}><ModalTransaction /></Provider>);
		expect(container).toMatchSnapshot();
});
});


describe('ProfileDetail', () => {
	it('ProfileDetail component is rendered', () => {
		const container = shallow(<Provider store={store}><ProfileDetail /></Provider>);
		expect(container).toMatchSnapshot();
});
});