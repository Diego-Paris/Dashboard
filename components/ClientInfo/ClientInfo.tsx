import { Avatar, Group, Stack, Text, Title } from '@mantine/core';
import { IconAt, IconBuilding, IconMapPin, IconPhoneCall } from '@tabler/icons-react';

import classes from './ClientInfo.module.css';
import { useGetClientById } from '@/lib/actions/client';

export function ClientInfo({ clientId }: { clientId: string }) {
  const getClientByIdQuery = useGetClientById(clientId);

  return (
    <div>
      <Group wrap="nowrap">
        <div>
          <Text fz="md" tt="uppercase" fw={500} c="dimmed">
            Client Information
          </Text>

          <Title order={2} fw={500}>
            {getClientByIdQuery.data?.firstName} {getClientByIdQuery.data?.lastName}
          </Title>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconBuilding stroke={1.5} size="1.2rem" className={classes.icon} />
            <Text fz="sm" c="dimmed">
              {getClientByIdQuery.data?.company}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1.2rem" className={classes.icon} />
            <Text fz="sm" c="dimmed">
              {getClientByIdQuery.data?.email}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1.2rem" className={classes.icon} />
            <Text fz="sm" c="dimmed">
              {getClientByIdQuery.data?.phone}
            </Text>
          </Group>
          <Group wrap="nowrap" gap={10} mt={3}>
            <IconMapPin stroke={1.5} size="1.2rem" className={classes.icon} />
            <Stack gap={0}>
              <Text fz="sm" c="dimmed">
                {getClientByIdQuery.data?.address}, {getClientByIdQuery.data?.country}
              </Text>
              <Text fz="sm" c="dimmed">
                {getClientByIdQuery.data?.city}, {getClientByIdQuery.data?.state},{' '}
                {getClientByIdQuery.data?.zip}
              </Text>
            </Stack>
          </Group>
        </div>
      </Group>
    </div>
  );
}
