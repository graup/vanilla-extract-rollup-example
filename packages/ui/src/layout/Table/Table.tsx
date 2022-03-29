
import { atoms } from '../../theme';
import { styled } from '../../util/styled';
import { captionRecipe, CaptionVariants, tableRecipe, TableVariants } from './styles.css';

const stickyTop = ({ sticky }: { sticky?: boolean }) => sticky ? atoms({ position: 'sticky', top: '0', backgroundColor: 'white' }) : '';
const stickyBottom = ({ sticky }: { sticky?: boolean }) => sticky ? atoms({ position: 'sticky', bottom: '0', backgroundColor: 'white' }) : '';

export const Table = styled('table', ({ variant }: NonNullable<TableVariants>) => tableRecipe({ variant }));

export const Head = styled('thead', stickyTop);

export const Footer = styled('tfoot', stickyBottom);

export const Body = styled('tbody');

export const Row = styled('tr', stickyTop);

export const Cell = styled('td');

export const HeadCell = styled('th');

export const Caption = styled('caption', ({ side }: NonNullable<CaptionVariants>) => captionRecipe({ side }));
