import { HeaderIndex } from '../components/Header';
import { Main } from '../components/Main';
import { SideBarIndex } from '../components/SideBar';

export function Goals() {
  return (
    <>
      <HeaderIndex model="home" />
      <div style={{ display: 'flex' }}>
        <SideBarIndex />
        <Main />
      </div>
    </>
  );
}
