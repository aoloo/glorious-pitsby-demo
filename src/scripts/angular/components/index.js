import alert from '@angular/components/alert/alert';
import button from '@angular/components/button/button';
import col from '@angular/components/col/col';
import field from '@angular/components/field/field';
import form from '@angular/components/form/form';
import input from '@angular/components/input/input';
import loader from '@angular/components/loader/loader';
import row from '@angular/components/row/row';
import textarea from '@angular/components/textarea/textarea';

export default angular.module('components', [])
  .component('pdAlert', alert)
  .component('pdButton', button)
  .component('pdCol', col)
  .component('pdField', field)
  .component('pdForm', form)
  .component('pdInput', input)
  .component('pdLoader', loader)
  .component('pdRow', row)
  .component('pdTextarea', textarea)
  .name;
