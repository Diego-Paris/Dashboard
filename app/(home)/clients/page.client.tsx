'use client';

import type { ReactElement } from 'react';
import {
  Paper,
  Title,
  Text,
  Space,
  Center,
  Flex,
  Box,
  useMantineTheme,
  Divider,
} from '@mantine/core';
import ClientsTable from '@/components/ClientsTable/ClientsTable';
import CreateClientButton from '@/components/CreateClientButton/CreateClientButton';

export function ClientsClient(): ReactElement {
  const theme = useMantineTheme();

  return (
    <Center>
      <Space h="md" />
      <Paper p="xs" shadow="xs" w={{ base: '97%' }} maw={`${theme.breakpoints.lg}`}>
        <Title m={10} order={1}>
          Clients
        </Title>
        {/* Container for the first two components */}
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          style={{ gap: '16px' }} // Adjust the gap size as needed
          mt={16}
        >
          {/* Component 1 */}
          <CreateClientButton />

          {/* Component 2 */}
        </Flex>

        {/* Component 3 - Always below the first two */}
        <Divider my="md" />
        <Box style={{ marginTop: '16px' }}>
          {/* Adjust the margin as needed */}
          <ClientsTable />
        </Box>
      </Paper>
    </Center>
  );
}