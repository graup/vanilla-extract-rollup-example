import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from '../../foundation/Box/Box';
import { Body, Caption, Cell, Footer, Head, HeadCell, Row, Table } from './Table';

export default {
  title: 'Contrib/Layout/Table',
  component: Table,
  parameters: {
    controls: {
      include: ['variant'],
    },
  },
} as ComponentMeta<typeof Table>;

export const BasicUsage: ComponentStory<typeof Table> = (args) => <Table {...args}>
  <Head>
    <Row><HeadCell>Object Name</HeadCell><HeadCell>Annotation Type</HeadCell><HeadCell>Auto Label AI</HeadCell><HeadCell>Count</HeadCell></Row>
  </Head>
  <Body>
    <Row><Cell>Vehicle_Car</Cell><Cell>Box</Cell><Cell>Common Objects</Cell><Cell align="right">1,123</Cell></Row>
    <Row><Cell>Vehicle_Van</Cell><Cell>Box</Cell><Cell>Apple watch project › Custom Auto Label AI 2<br />› Custom Auto Label AI 2 › Custom Auto Label AI 2</Cell><Cell align="right">12,123</Cell></Row>
  </Body>
  <Footer>
    <Row><Cell colSpan={3}></Cell><Cell align="right">13,246</Cell></Row>
  </Footer>
</Table>;

BasicUsage.args = {
  variant: 'simple',
};

export const Sticky = () => <Box border="1px solid" overflow="overlay" style={{ maxHeight: 160 }}>
  <Table variant="simple">
    <Head sticky>
      <Row><HeadCell>1</HeadCell><HeadCell>2</HeadCell><HeadCell>3</HeadCell></Row>
    </Head>
    <Body>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
    </Body>
    <Footer sticky>
      <Row><Cell colSpan={2}></Cell><Cell align="right">13,246</Cell></Row>
    </Footer>
  </Table>
</Box>;

export const WithCaption = () => <Box border="1px solid" borderColor="gray-080" borderRadius="4px">
  <Table>
    <Caption>Object Classes</Caption>
    <Caption side="bottom">Caption can be on the bottom</Caption>
    <Head>
      <Row><HeadCell>Object Name</HeadCell><HeadCell>Annotation Type</HeadCell><HeadCell>Auto Label AI</HeadCell><HeadCell>Count</HeadCell></Row>
    </Head>
    <Body>
      <Row><Cell>Vehicle_Car</Cell><Cell>Box</Cell><Cell>Common Objects</Cell><Cell align="right">1,123</Cell></Row>
      <Row><Cell>Vehicle_Van</Cell><Cell>Box</Cell><Cell>Apple watch project › Custom Auto Label AI 2</Cell><Cell align="right">12,123</Cell></Row>
    </Body>
  </Table>
</Box>;