const ValuesImageEffects = {
  chrome: 'chrome',
  sepia: 'sepia',
  marvin: 'marvin',
  phobos: 'phobos',
  heat: 'heat'
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
    if (evt.target.value === ValuesImageEffects.chrome) {
      sliderEffectIntesityNode.noUiSlider.on('update', () => {
        imageNode.style = `filter: grayscale(${sliderEffectIntesityNode.noUiSlider.get()})`;
      });
    }

    if (evt.target.value === ValuesImageEffects.sepia) {
      sliderEffectIntesityNode.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });

      sliderEffectIntesityNode.noUiSlider.on('update', () => {
        imageNode.style = `filter: sepia(${sliderEffectIntesityNode.noUiSlider.get()})`;
      });
    } else if (evt.target.value === ValuesImageEffects.chrome) {
      sliderEffectIntesityNode.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
    }

    if (evt.target.value === ValuesImageEffects.marvin) {
      sliderEffectIntesityNode.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 100
        },
        start: 100,
        step: 1
      });

      sliderEffectIntesityNode.noUiSlider.on('update', () => {
        imageNode.style = `filter: invert(${sliderEffectIntesityNode.noUiSlider.get()}%)`;
      });
    }  else if (evt.target.value === ValuesImageEffects.chrome) {
      sliderEffectIntesityNode.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
    }

    if (evt.target.value === ValuesImageEffects.phobos) {
      sliderEffectIntesityNode.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 3,
        step: 0.1
      });

      sliderEffectIntesityNode.noUiSlider.on('update', () => {
        imageNode.style = `filter: blur(${sliderEffectIntesityNode.noUiSlider.get()}px)`;
      });
    }  else if (evt.target.value === ValuesImageEffects.chrome) {
      sliderEffectIntesityNode.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
    }

    if (evt.target.value === ValuesImageEffects.heat) {
      sliderEffectIntesityNode.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 3,
        step: 0.1
      });

      sliderEffectIntesityNode.noUiSlider.on('update', () => {
        imageNode.style = `filter: brightness(${sliderEffectIntesityNode.noUiSlider.get()})`;
      });
    }  else if (evt.target.value === ValuesImageEffects.chrome) {
      sliderEffectIntesityNode.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
    }
  });
});

