using System;
using System.Collections.Generic;
using System.Text;

namespace UnityTest.Interfaces
{
    interface IGeneric<T>
    {
        public T Field { get; set; }

        public void FieldSound();
    }
}
