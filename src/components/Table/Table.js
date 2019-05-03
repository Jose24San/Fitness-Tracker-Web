import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BaseTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ( {
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    // backgroundColor: globalTheme.LIGHT_DARK_BACKGROUND,
  },
  table: {
    minWidth: 700,
  },
  white: {
    color: 'white',
  },
} );

let key = 0;
const getKey = () => key += 1;

function Table( { classes, rowHeaders, rowData, hightLightColor } ) {
  return (
    <Paper className={ classes.root }>
      <BaseTable className={ classes.table }>

        <TableHead>
          <TableRow>
            {
              rowHeaders.map( header => (
                <TableCell key={ header }>{ header }</TableCell>
              ) )
            }
          </TableRow>
        </TableHead>

        <TableBody>
          {
            rowData.map( row => (
              <TableRow key={ row[ 0 ].title }>
                {
                  row.map( cell => (
                    <TableCell
                      key={ getKey() }
                      style={
                        ( cell.highlight )
                          ? { background: hightLightColor }
                          : { background: 'transparent' }
                      }
                    >
                      { cell.title }
                    </TableCell>
                  ) )
                }
              </TableRow>
            ) )
          }
        </TableBody>

      </BaseTable>
    </Paper>
  );
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
  rowHeaders: PropTypes.array,
  rowData: PropTypes.array,
};

export default withStyles( styles )( Table );
