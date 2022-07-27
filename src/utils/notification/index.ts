import { Notify } from 'quasar';

export const notificationMaker =
  (color: string, textColor: string) => (message: string) => {
    Notify.create({
      color,
      message,
      textColor,
      position: 'bottom',
    });
  };

export const successNotification = notificationMaker('positive', 'white');
export const errorNotification = notificationMaker('red-8', 'red-1');
