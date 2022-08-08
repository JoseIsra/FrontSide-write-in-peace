const options = {
  plugins: 'emoticons, lists',
  toolbar:
    'undo redo | forecolor fontsizeselect | bold italic backcolor | \
  alignleft aligncenter alignright alignjustify | \
  bullist numlist |  ',
};

const tinyDefaultStyles = `

::-webkit-scrollbar {
  background-color: transparent;
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #e2e3e4;
  border-radius:4px;
}
`;

export const config = {
  height: 500,
  width: '95vw',
  menubar: false,
  ...options,
  resize: false,
  statusbar: false,
  content_style: tinyDefaultStyles,
};
