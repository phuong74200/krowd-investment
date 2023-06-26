import { Theme } from '@mui/material';
import { merge } from 'lodash';

import Accordion from './Accordion';
import Alert from './Alert';
import Autocomplete from './Autocomplete';
import Avatar from './Avatar';
import Backdrop from './Backdrop';
import Badge from './Badge';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import Checkbox from './Checkbox';
import Chip from './Chip';
import Container from './Container';
import ControlLabel from './ControlLabel';
import DataGrid from './DataGrid';
import Dialog from './Dialog';
import Drawer from './Drawer';
import Fab from './Fab';
import Grid from './Grid';
import IconButton from './IconButton';
import Input from './Input';
import Link from './Link';
import Lists from './Lists';
import LoadingButton from './loading-button';
import Menu from './menu';
import Pagination from './pagination';
import Paper from './paper';
import Pickers from './pickers';
import Popover from './popover';
import Progress from './progress';
import Radio from './radio';
import Rating from './rating';
import Select from './select';
import Skeleton from './skeleton';
import Slider from './slider';
import Snackbar from './snack-bar';
import Stepper from './stepper';
import SvgIcon from './svg-icon';
import Switch from './switch';
import Table from './table';
import Tabs from './tabs';
import Timeline from './timeline';
import ToggleButton from './toggle-button';
import Tooltip from './tooltip';
import TreeView from './tree-view';
import Typography from './typography';

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Fab(theme),
    Tabs(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    Grid(),
    Link(),
    Input(theme),
    Radio(theme),
    Badge(),
    Lists(theme),
    Table(theme),
    Paper(theme),
    Alert(theme),
    Switch(theme),
    Select(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Pickers(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(),
    Checkbox(theme),
    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),
    TreeView(theme),
    Backdrop(theme),
    Snackbar(),
    Progress(theme),
    Container(),
    Accordion(theme),
    IconButton(),
    Typography(theme),
    Pagination(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    Autocomplete(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}
