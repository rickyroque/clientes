import { formatDate, registerLocaleData } from "@angular/common";
import { environment } from "src/environments/environment";
import localeEs from '@angular/common/locales/es';

declare var require: any
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('src/assets/fonts/customFonts');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf',
  },
  Arial: {
    normal: 'Arial-Normal.ttf',
    bold: 'Arial-Bold.ttf',
    italics: 'Arial-Italic.ttf',
    bolditalics: 'Arial-Bold.ttf'
  }
};
registerLocaleData(localeEs, 'es');

export class Pdf {

  public static getPDFInversionistas(list:any[]) {
    let dataTable: any[] = Object.keys(list[0]);
    let bodyTable: any = [];
    list.forEach(el=>{
      bodyTable.push(Object.values(el));
  });
    const hoy: Date = new Date();
    const format = "EEEE, d 'de' MMMM 'del' yyyy";
    const locale = 'es-ES';
    let f = formatDate(hoy, format, locale);
    f = f.charAt(0).toUpperCase() + f.slice(1);
    let docDefinition = {
      compress: true,
      defaultStyle: {
        font: 'Arial',
        fontSize: 8,
        alignment: 'justify',
      },
      pageMargins: [30, 80, 30, 30],
      styles: {
        headTable: {
          color: 'white',
          fillColor: '#012060',
          alignment: 'center',
          bold: true,
        },
      },
      pageOrientation: 'landscape',
      header: {
        table: {
          widths: ['auto', '*'],
          body: [
            [
              {
                fillColor: '#3DA888',
                image:
                  environment.base64.img.logo.type +
                  environment.base64.img.logo.data,
                width: 100,
                margin: [15, 10, 10, 10],
              },
              {
                margin: [10, 15, 20, 15],
                fontSize: 20,
                color: 'white',
                alignment: 'right',
                fillColor: '#3a4f7b',
                text: [
                  `LISTADO DE TURISTAS`,
                  { text: `\nRecorrido: Guayaquil - Laguna de Quilotoa`, fontSize: 11 },
                  { text: `\n${f}`, fontSize: 9 },
                ],
              },
            ],
          ],
        },
        layout: 'noBorders',
      },
      content: [
        {
          layout: 'lightHorizontalLines',
          table: {
            widths:
              dataTable.length < 8
                ? [...Array(dataTable.length - 1).fill('*'), 'auto']
                : null,
            body: [dataTable, ...bodyTable],
          },
          margin: [0, 15, 0, 0],
        },
      ],
    };
    return pdfMake.createPdf(
      docDefinition,
      null,
      pdfMake.fonts,
      pdfFonts.pdfMake.vfs
    );
  }

} 