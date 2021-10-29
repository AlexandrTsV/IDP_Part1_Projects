using System;
using Unity;
using Unity.Injection;

using UnityTest.Cats;
using UnityTest.Dogs;
using UnityTest.Ducks;
using UnityTest.Generic;
using UnityTest.Interfaces;

namespace UnityTest
{

    class Program
    {
        static void Main(string[] args)
        {
            var container = new UnityContainer();
            container.RegisterType<ICat, SimpleCat>();
            container.RegisterType<IDog, WeirdDog>();

            container.RegisterType<IDuck, SimpleDuck>();
            container.RegisterType<IDuck, WeirdDuck>("Weird");

            container.RegisterType(typeof(IGeneric<>), typeof(SimpleGeneric<>));

            container.RegisterType<AnimalsConstructor>("WeirdDuck",
                new InjectionConstructor(
                    container.Resolve<ICat>(),
                    container.Resolve<IDog>(),
                    container.Resolve<IDuck>("Weird")));

            AnimalsConstructor ac = container.Resolve<AnimalsConstructor>("WeirdDuck");
            ac.Sound();

            AnimalsMethod am = container.Resolve<AnimalsMethod>();
            am.Sound();

            AnimalsProperty ap = container.Resolve<AnimalsProperty>();
            ap.Sound();

            IGeneric<float> ca = container.Resolve<IGeneric<float>>();
            ca.FieldSound();
        }
    }
}
