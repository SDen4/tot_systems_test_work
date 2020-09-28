### Denis Skryabin

#### Test work for 'Front-end junior+/middle разработчик (React)'


**Протестировать демо-версию на github pages**

#### Watch on [github-pages](https://sden4.github.io/tot_systems_test_work/)

Логин: 'Den', пароль: '12345'.


**Установка и запуск dev-сервера**

```sh
$ git clone https://github.com/SDen4/tot_systems_test_work.git
$ cd tot_systems_test_work
$ npm i
$ npm run dev
```


**Используемый стек**

html, scss, javascript, react, webpack


**Описание**

Данная версия подойдет в качестве mvp.

Для более полной версии необходимо добавить:

возможность установки и отображения аватарок пользователей;

возможность использовать смайлы в сообщениях;

возможность отправки файлов;

поиск по сообщениям;

**Функционал**


В приложении реализован функционал двух отдельных чатов для общения на рабочие и нерабочие темы.

Подддерживается редактирование собственных сообщений.

Реализована возможность удаления собственных сообщений с предотвращением 
случайного нажатия кнопки - окном подтверждения действия удаления.

Авторизация пользователя реализована только для демо-версии текущего примера и не подходит для реальной версии.

Сделана валидация на предмет незаполненных полей при авторизации, а также на предмет неверно введенных данных - без использования сторонних плагинов.

Реализована валидация отправляемы сообщений - нельзя отправить пустое сообщение.

Реализована адаптивная верстка для мобильных устройств.

<!-- 
github pages
git add dist && git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages
 -->