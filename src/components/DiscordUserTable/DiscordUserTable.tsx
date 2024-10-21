import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, rem } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';

const data = [
  {
    avatar:
      'https://images-ext-1.discordapp.net/external/qz4gfnMc9Z4674MjYCSJvpR8yFRdRbsCl2NoatRmv4k/https/cdn.discordapp.com/avatars/505833634134228992/3d9555731affb8dba56ec02071d4f1e7.webp',
    nickname: 'Bog',
    username: 'stonleyfx',
    minecraft: 'BogTheMudWing',
    standing: 'Good'
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    nickname: 'tetchy',
    username: 'tetchytick',
    minecraft: 'tetchytick',
    standing: 'Tempbanned'
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    nickname: 'TNTCreeper',
    username: 'realtntcreeper',
    minecraft: 'RealTNTCreeper',
    standing: 'Banned'
  },
];

const standingColors: Record<string, string> = {
  good: 'green',
  tempbanned: 'yellow',
  banned: 'red',
};

export function DiscordUserTable() {
  const rows = data.map((item) => (
    <Table.Tr key={item.username}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <div>
            <Text fz="sm" fw={500}>
              {item.nickname}
            </Text>
            <Text c="dimmed" fz="xs">
              {item.username}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        <Text fz="sm">{item.minecraft}</Text>
      </Table.Td>

      <Table.Td>
        <Badge color={standingColors[item.standing.toLowerCase()]} variant="light">
          {item.standing}
        </Badge>
      </Table.Td>
      
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={'auto'}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>User</Table.Th>
            <Table.Th>Minecraft</Table.Th>
            <Table.Th>Standing</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}