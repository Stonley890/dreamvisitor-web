import { useState } from 'react';
import { Group, Title } from '@mantine/core';
import {
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
  IconHome,
  IconTerminal,
  IconUser,
} from '@tabler/icons-react';
import classes from './NavbarSimple.module.css';
import { ActionToggle } from '../ActionToggle/ActionToggle';

const data = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: 'console', label: 'Console', icon: IconTerminal },
  { link: 'config', label: 'Configuration', icon: IconSettings },
  { link: 'users', label: 'Users', icon: IconUser },
];

export function NavbarSimple({ page }: { page: string }) {
  const [active, setActive] = useState(page);

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Title order={1}>DV3</Title>
          <ActionToggle />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}