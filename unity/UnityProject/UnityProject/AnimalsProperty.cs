using System;
using System.Collections.Generic;
using System.Text;

using Unity;

using UnityTest.Interfaces;

namespace UnityTest
{
    class AnimalsProperty
    {
        [Dependency]
        public ICat Cat { get; set; }
        [Dependency]
        public IDog Dog { get; set; }
        [Dependency]
        public IDuck Duck { get; set; }

        public void Sound()
        {
            Cat.Meow();
            Dog.Bark();
            Duck.Quack();
        }
    }
}
