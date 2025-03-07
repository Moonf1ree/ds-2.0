import { customInputColors, sizesMappingInput } from '@components/declaration';

export const argsTypes = {
  onChange: {
    description: 'Callback, который будет вызван при изменении значения внутри input',
    action: 'изменено value'
  },
  value: {
    description: 'Значение поля input',
    control: { type: 'text' }
  },
  helperText: {
    description: 'Строка для вспомогательно текста под инпутом. Может быть как текстом, так и элементом ReactNode',
    control: { type: 'text' }
  },
  label: {
    description: 'Строка для вспомогательно текста над инпутом',
    control: { type: 'text' }
  },
  icon: {
    description: 'Элемент с иконкой, который располагается с правой стороны инпута',
    control: { type: 'boolean' }
  },
  size: {
    description: 'Свойство, позволяющее регулировать высоту инпута',
    table: {
      defaultValue: {
        summary: sizesMappingInput.m
      }
    },
    options: Object.values(sizesMappingInput),
    control: { type: 'select' }
  },
  disabled: {
    description: 'Условие блокировки input для ввода/изменений',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  color: {
    description: 'Цвет компонента, отображающий разные состояния',
    table: {
      defaultValue: {
        summary: customInputColors.default
      }
    },
    options: Object.values(customInputColors),
    control: { type: 'select' }
  },
  multiline: {
    description: 'Свойство, позволяющее сделать компонент многострочным (как TextArea)',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  resize: {
    description:
      'Свойство, позволяющее изменять размер многострочного компонента (TextArea). Работает только со свойством multiline.',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  id: {
    description: 'Идентификатор компонента',
    control: { type: 'text' }
  },
  pseudo: {
    description: 'Свойство, позволяющее переключать компонент с default на PseudoInput',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  colored: {
    description: 'Свойство, позволяющее изменить цвет фона инпута на светло-желтый',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  }
};
