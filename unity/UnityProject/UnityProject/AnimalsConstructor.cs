using System;
using System.Collections.Generic;
using System.Text;

using UnityTest.Interfaces;

namespace UnityTest
{
    class AnimalsConstructor
    {
        private ICat _cat;
        private IDog _dog;
        private IDuck _duck;

        public AnimalsConstructor(ICat cat, IDog dog, IDuck duck)
        {
            _cat = cat;
            _dog = dog;
            _duck = duck;
        }

        public void Sound()
        {
            _cat.Meow();
            _dog.Bark();
            _duck.Quack();
        }
    }
}
