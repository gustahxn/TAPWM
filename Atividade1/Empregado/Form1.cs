using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Empregado
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btn_mensalista_Click(object sender, EventArgs e)
        {
            frmMensalista frmMensalista = new frmMensalista();
            frmMensalista.Show();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btn_horista_Click(object sender, EventArgs e)
        {
            frmHorista FrmHorista = new frmHorista();
            FrmHorista.Show();

        }
    }
}
