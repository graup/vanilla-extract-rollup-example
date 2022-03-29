
import { ComponentProps } from 'react';

import { Body, Box, Button, Caption, Cell, Row, styled, Table, Typography } from '@vanilla-extract-rollup-example/ui';

import { card, pageContainer, usageGrid } from './billing.css';

const Card = styled(Box, card);
Card.displayName = 'Card';
const UsageGrid = styled(Box, usageGrid);
UsageGrid.displayName = 'UsageGrid';

function LabelValue({ label, value, valueVariant = 'm-regular' }: { label: string; value: string; valueVariant?: ComponentProps<typeof Typography>['variant'] }) {
  return <Box display="flex" alignItems="baseline" justifyContent="space-between" gap={1} >
    <Typography variant="m-strong">{label}</Typography>
    <Typography variant={valueVariant}>{value}</Typography>
  </Box >;
}

function InvoiceTable() {
  return <Table>
    <Caption>Invoices</Caption>
    <Body>
      <Row>
        <Cell>Not Paid</Cell>
        <Cell>Oct 14, 2020 ~ Oct 14, 2020</Cell>
        <Cell>$ 125,000</Cell>
        <Cell align="right"><Button>View Details</Button></Cell>
      </Row>
      <Row>
        <Cell>Not Paid</Cell>
        <Cell>Oct 14, 2020 ~ Oct 14, 2020</Cell>
        <Cell>$ 125,000</Cell>
        <Cell align="right"><Button>View Details</Button></Cell>
      </Row>
    </Body>
  </Table>;
}

export function BillingPage() {
  return <Box p={2} mx="auto" display="flex" flexDirection="column" gap={2} className={pageContainer}>
    <Card p={2} display="flex" alignItems="center">
      <Box marginLeft={1}>
        <Typography variant="h2">
          <Box as="span" color="red">Enterprise</Box>
          {' '}Plan
        </Typography>
      </Box>
      <Box marginLeft="auto" display="flex" alignItems="center">
        <Box display="flex" gap={3} marginRight={3}>
          <LabelValue label="Interval" value="yearly" />
          <LabelValue label="Usage Reset" value="Feb 3, 2022" />
        </Box>
        <Button variant="strong-fill" color="red" size="l">Change Plan</Button>
      </Box>
    </Card>
    <Card p={3}>
      <UsageGrid>
        <Box borderRight="2px solid" borderColor="gray-060" paddingRight={3}>
          <LabelValue label="Data Storage" value="158,998 / 500,000" valueVariant="l-regular" />
        </Box>
        <Box borderRight="2px solid" borderColor="gray-060" paddingRight={3}>
          <LabelValue label="User Seats" value="19 / 30" valueVariant="l-regular" />
        </Box>
        <Box>
          <LabelValue label="Credits" value="260 / 500,000" valueVariant="l-regular" />
        </Box>
      </UsageGrid>
    </Card>
    <Card>
      <InvoiceTable />
    </Card>
  </Box>;
}