const ValuesImageEffects = {
  chrome: {
    csseffect: 'grayscale',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    csseffect: 'sepia',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    csseffect: 'invert',
    min: 1,
    max: 100,
    start: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    csseffect: 'blur',
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    csseffect: 'brightness',
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
    unit: ''
  }
};

const changeEffectsRadioButtonNodes = document.querySelectorAll('.effects__radio');
const imageNode = document.querySelector('.img-upload__preview');
const sliderEffectIntesityNode = document.querySelector('.effect-level__slider');
const sliderFieldNode = document.querySelector('.img-upload__effect-level');
sliderFieldNode.classList.add('hidden');

let currentEffect = 'effects__preview--none';

changeEffectsRadioButtonNodes.forEach((button) => {
  button.addEventListener('change', (evt) => {
    if (currentEffect) {
      imageNode.classList.remove(currentEffect);
    }

    currentEffect = `effects__preview--${evt.target.value}`;

    if (currentEffect === 'effects__preview--none') {
      sliderEffectIntesityNode.classList.add('hidden');
      sliderFieldNode.classList.add('hidden');
      imageNode.style = 'filter: ``';
    }

    if (currentEffect !== 'effects__preview--none') {
      sliderEffectIntesityNode.classList.remove('hidden');
      sliderFieldNode.classList.remove('hidden');
    }

    imageNode.classList.add(currentEffect);
  });
});

noUiSlider.create(sliderEffectIntesityNode, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

changeEffectsRadioButtonNodes.forEach((effectsButton) => {
  effectsButton.addEventListener('change', (evt) => {
    const effect = evt.target.value;
    const effectParams = ValuesImageEffects[effect];
    const cssEffect = effectParams.csseffect;

    sliderEffectIntesityNode.noUiSlider.updateOptions({
      range: {
        min: effectParams.min,
        max: effectParams.max
      },
      start: effectParams.start,
      step: effectParams.step
    });

    const unit = effectParams.unit;

    sliderEffectIntesityNode.noUiSlider.on('update', () => {
      imageNode.style = `filter: ${cssEffect}(${sliderEffectIntesityNode.noUiSlider.get()}${unit})`;
    });
  });
});

