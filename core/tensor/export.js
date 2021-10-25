'use strict';

module.exports = async function (inputs, outputs) {

    // Esta variable queda dentro de esta funcion para no ser cargada si no se utiliza la funcion
    const tf = require('@tensorflow/tfjs-node');

    // Se crea el modelo
    const model = tf.sequential();

    // Crea una capa con una neurona
    const cap = tf.layers.dense({ units: 1, inputShape: [ 1 ] });

    // Agrega la capa al modelo
    model.add(cap);

    // Configura el modelo
    model.compile({ loss: tf.losses.meanSquaredError, optimizer: new tf.train.adam(0.1) });

    // Entrena el modelo
    inputs  = tf.tensor1d(inputs);
    outputs = tf.tensor1d(outputs);

    await model.fit(inputs, outputs, { epochs: 1000, verbose: false });

    // Devuelve una funcion que sirve para predecir
    return function (inputs) {

        inputs = tf.tensor1d(inputs);

        const results = model.predict(inputs).arraySync();

        let cache = [];

        for (const _result of results) {

            cache = cache.concat(_result);
        };

        for (let i = 0; i < cache.length; i++) {

            cache[i] = Math.trunc(cache[i]);
        };

        return cache;
    };
};