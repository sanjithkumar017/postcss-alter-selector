import postcss from 'postcss';
import test from 'ava';

import plugin from './';

function run(t, input, output, opts = {}) {
    return postcss([plugin(opts)]).process(input)
        .then(result => {
            t.is(result.css, output);
            t.is(result.warnings().length, 0);
        });
}

const selector = '.selector ';

test('Alter selector', t =>
  run(t, 'a{ }', '.selector a{ }', { selector })
);

test('Alter selectors', t =>
  run(t, 'a, .example{ }', '.selector a, .selector .example{ }', { selector })
);

test('Should not Alter if class is already there', t =>
  run(t, '.selector.example{ }', '.selector.example{ }', { selector })
);

test('Skip keyframe rules', t =>
  run(t, '0%, from {} 100%, to {}', '0%, from {} 100%, to {}', { selector })
);

test('Skip numerical values with decimal in keyframes', t =>
  run(t, '@keyframes name{0%{}.5%{}0.9%{}10.10%{}20.1%{}100%{}}',
        '@keyframes name{0%{}.5%{}0.9%{}10.10%{}20.1%{}100%{}}', { selector })
);
