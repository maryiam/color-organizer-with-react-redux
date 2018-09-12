import { connect } from 'react-redux';

import { addColor, rateColor, removeColor, sortColors } from '../../redux/Actions';
import { sortByDate } from '../../helpers';
import ColorsList from '../presentationals/list/List';
import AddColorForm from '../presentationals/create/Add';
import Sort from '../presentationals/sort/Sort';

export const Colors = connect(
  state => ({
    list: sortByDate(state.colors, state.sortBy)
  }),
  dispatch => ({
    onRateColor(id, rating) {
      dispatch(rateColor(id, rating));
    },
    onDeleteColor(id) {
      dispatch(removeColor(id));
    }
  })
)(ColorsList);

export const CreateColor = connect(
  null,
  dispatch => ({
    onAddColor(title, color) {
      dispatch(addColor(title, color));
    }
  })
)(AddColorForm);

export const SortColors = connect(
  state => ({
    order: state.sortBy
  }),
  dispatch => ({
    onSort(sortBy) {
      dispatch(sortColors(sortBy));
    }
  })
)(Sort);
