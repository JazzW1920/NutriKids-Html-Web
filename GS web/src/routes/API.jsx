import React, { useState } from 'react';
import './API.css';

const API = () => {
    const [comida, setFoodName] = useState('');
    const [caloria, setResult] = useState('');

    const getCalories = () => {
        const appId = 'de381a33';
        const appKey = '57e842fc58cd8993b502c5f80883dd22';
        const apiUrl = `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&nutrition-type=cooking&ingr=100g%20${comida}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => displayResult(data))
            .catch((error) => {
                console.error('Erro na solicitação da API:', error);
                setResult('Erro na solicitação da API. Verifique o console para mais detalhes.');
            });
    };

    const displayResult = (data) => {
        if (data.calories) {
            setResult(`Calorias para 100g de '${data.ingredients[0].parsed[0].food}': ${data.calories.toFixed(2)}`);
        } else {
            setResult('Não foi possível obter informações nutricionais para este alimento.');
        }
    };

    return (
        <main className='mainAPI'>
            <h1 className='consulta'>Consulta de Calorias por 100g</h1>

            <form className='formAPI' onSubmit={(e) => { e.preventDefault(); getCalories(); }}>
                <label className='labelAPI' htmlFor="foodInput">Digite o nome do alimento:</label>
                <input className='inputAPI' placeholder='Em Inglês' type="text" id="foodInput" value={comida} onChange={(e) => setFoodName(e.target.value)}
                    required
                />
                <button className='buttonAPI' type="submit">Consultar Calorias</button>
            </form>

            <div className='resultAPI' id="caloria">{caloria}</div>
        </main>
    );
};

export default API;
