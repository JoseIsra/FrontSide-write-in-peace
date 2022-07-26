import { Notify } from 'quasar';

export const notificationMaker = (color: string) => (message: string) => {
  Notify.create({
    color,
    message,
    position: 'bottom',
  });
};

export const successNotification = notificationMaker('positive');
export const errorNotification = notificationMaker('red');
