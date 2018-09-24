import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {RecordService} from "../../shared/services/record.service";
import {RecordModel} from "../../shared/models/record.model";
import * as moment from 'moment';
//import { CalendarModal, CalendarModalOptions, CalendarResult} from "ion2-calendar";

@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage implements OnInit {

  date: {from: string, to: string} = {
    from: moment().format("MMM, DD"),
    to: moment().format("MMM, DD")
  };
  records: RecordModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private recordService: RecordService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.records = this.recordService.getAll();
  }

  convertDate(time: string) {
    moment.updateLocale('en', {
      weekdaysShort : ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    });
    return moment(time, "DD.MM.YYYY HH:mm").format('ddd, HH:mm');
  }

  /*openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Выберите диапазон',
      to: new Date(),
      from: new Date('2017'),
      defaultScrollTo: new Date(),
      weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekStart: 1,
      defaultDate: new Date(),
      closeLabel: 'Закрыть',
      doneLabel: 'Выбрать'
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
      console.log(date);
      this.date.from = (date === null) ? this.date.from : moment(date.from.string, "YYYY-MM-DD").format("MMM, DD");
      this.date.to = (date === null) ? this.date.to : moment(date.to.string, "YYYY-MM-DD").format("MMM, DD");
    });
  }*/



}
