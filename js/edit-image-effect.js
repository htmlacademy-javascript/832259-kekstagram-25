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
    min: 0,
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
const fullSizeImageNode = imageNode.querySelector('img');
const sliderEffectIntesityNode = document.querySelector('.effect-level__slider');
const sliderFieldNode = document.querySelector('.img-upload__effect-level');
sliderFieldNode.classList.add('hidden');

noUiSlider.create(sliderEffectIntesityNode, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

function changeSaturationEffectSlider (evt) {
  const effect = evt;
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
    fullSizeImageNode.style.filter = `${cssEffect}(${sliderEffectIntesityNode.noUiSlider.get()}${unit})`;  });
}

function hideSliderScale () {
  sliderEffectIntesityNode.classList.add('hidden');
  sliderFieldNode.classList.add('hidden');
  fullSizeImageNode.style = 'filter: ``';
}

function onEffectSelect (evt) {
  sliderEffectIntesityNode.classList.remove('hidden');
  sliderFieldNode.classList.remove('hidden');

  const selectEffect = evt.target.value;

  if (selectEffect === 'none') {
    hideSliderScale();
  }

  changeSaturationEffectSlider(selectEffect);
}

changeEffectsRadioButtonNodes.forEach((button) => {
  button.addEventListener('change', onEffectSelect);
});
