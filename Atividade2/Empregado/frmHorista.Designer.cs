namespace Empregado
{
    partial class frmHorista
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_instanciar_horista = new System.Windows.Forms.Button();
            this.tb_numero_horas = new System.Windows.Forms.TextBox();
            this.tb_salario_hora = new System.Windows.Forms.TextBox();
            this.tb_nome = new System.Windows.Forms.TextBox();
            this.tb_matricula = new System.Windows.Forms.TextBox();
            this.lbl_numero_horas = new System.Windows.Forms.Label();
            this.lbl_salario_mensal = new System.Windows.Forms.Label();
            this.lbl_nome = new System.Windows.Forms.Label();
            this.lbl_matricula = new System.Windows.Forms.Label();
            this.h1 = new System.Windows.Forms.Label();
            this.tb_data_entrada_empresa = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.tb_faltas = new System.Windows.Forms.TextBox();
            this.lbl_faltas = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btn_instanciar_horista
            // 
            this.btn_instanciar_horista.Location = new System.Drawing.Point(183, 380);
            this.btn_instanciar_horista.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.btn_instanciar_horista.Name = "btn_instanciar_horista";
            this.btn_instanciar_horista.Size = new System.Drawing.Size(642, 45);
            this.btn_instanciar_horista.TabIndex = 18;
            this.btn_instanciar_horista.Text = "Instanciar Horista";
            this.btn_instanciar_horista.UseVisualStyleBackColor = true;
            this.btn_instanciar_horista.Click += new System.EventHandler(this.btn_instanciar_horista_Click);
            // 
            // tb_numero_horas
            // 
            this.tb_numero_horas.Location = new System.Drawing.Point(401, 253);
            this.tb_numero_horas.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.tb_numero_horas.Name = "tb_numero_horas";
            this.tb_numero_horas.Size = new System.Drawing.Size(328, 22);
            this.tb_numero_horas.TabIndex = 17;
            // 
            // tb_salario_hora
            // 
            this.tb_salario_hora.Location = new System.Drawing.Point(401, 199);
            this.tb_salario_hora.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.tb_salario_hora.Name = "tb_salario_hora";
            this.tb_salario_hora.Size = new System.Drawing.Size(328, 22);
            this.tb_salario_hora.TabIndex = 16;
            // 
            // tb_nome
            // 
            this.tb_nome.Location = new System.Drawing.Point(401, 147);
            this.tb_nome.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.tb_nome.Name = "tb_nome";
            this.tb_nome.Size = new System.Drawing.Size(328, 22);
            this.tb_nome.TabIndex = 15;
            // 
            // tb_matricula
            // 
            this.tb_matricula.Location = new System.Drawing.Point(401, 96);
            this.tb_matricula.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.tb_matricula.Name = "tb_matricula";
            this.tb_matricula.Size = new System.Drawing.Size(328, 22);
            this.tb_matricula.TabIndex = 14;
            // 
            // lbl_numero_horas
            // 
            this.lbl_numero_horas.AutoSize = true;
            this.lbl_numero_horas.Location = new System.Drawing.Point(180, 253);
            this.lbl_numero_horas.Name = "lbl_numero_horas";
            this.lbl_numero_horas.Size = new System.Drawing.Size(111, 16);
            this.lbl_numero_horas.TabIndex = 13;
            this.lbl_numero_horas.Text = "Número de horas";
            // 
            // lbl_salario_mensal
            // 
            this.lbl_salario_mensal.AutoSize = true;
            this.lbl_salario_mensal.Location = new System.Drawing.Point(180, 204);
            this.lbl_salario_mensal.Name = "lbl_salario_mensal";
            this.lbl_salario_mensal.Size = new System.Drawing.Size(103, 16);
            this.lbl_salario_mensal.TabIndex = 12;
            this.lbl_salario_mensal.Text = "Salário por hora";
            // 
            // lbl_nome
            // 
            this.lbl_nome.AutoSize = true;
            this.lbl_nome.Location = new System.Drawing.Point(180, 152);
            this.lbl_nome.Name = "lbl_nome";
            this.lbl_nome.Size = new System.Drawing.Size(44, 16);
            this.lbl_nome.TabIndex = 11;
            this.lbl_nome.Text = "Nome";
            // 
            // lbl_matricula
            // 
            this.lbl_matricula.AutoSize = true;
            this.lbl_matricula.Location = new System.Drawing.Point(180, 102);
            this.lbl_matricula.Name = "lbl_matricula";
            this.lbl_matricula.Size = new System.Drawing.Size(61, 16);
            this.lbl_matricula.TabIndex = 10;
            this.lbl_matricula.Text = "Matrícula";
            // 
            // h1
            // 
            this.h1.AutoSize = true;
            this.h1.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.h1.Font = new System.Drawing.Font("Microsoft Sans Serif", 22F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.h1.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.h1.Location = new System.Drawing.Point(307, 21);
            this.h1.Name = "h1";
            this.h1.Size = new System.Drawing.Size(287, 42);
            this.h1.TabIndex = 19;
            this.h1.Text = "*** HORISTA ***";
            // 
            // tb_data_entrada_empresa
            // 
            this.tb_data_entrada_empresa.Location = new System.Drawing.Point(401, 302);
            this.tb_data_entrada_empresa.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.tb_data_entrada_empresa.Name = "tb_data_entrada_empresa";
            this.tb_data_entrada_empresa.Size = new System.Drawing.Size(328, 22);
            this.tb_data_entrada_empresa.TabIndex = 21;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(180, 302);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(144, 16);
            this.label1.TabIndex = 20;
            this.label1.Text = "Data Entrada Empresa";
            // 
            // tb_faltas
            // 
            this.tb_faltas.Location = new System.Drawing.Point(401, 346);
            this.tb_faltas.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.tb_faltas.Name = "tb_faltas";
            this.tb_faltas.Size = new System.Drawing.Size(328, 22);
            this.tb_faltas.TabIndex = 23;
            // 
            // lbl_faltas
            // 
            this.lbl_faltas.AutoSize = true;
            this.lbl_faltas.Location = new System.Drawing.Point(180, 346);
            this.lbl_faltas.Name = "lbl_faltas";
            this.lbl_faltas.Size = new System.Drawing.Size(75, 16);
            this.lbl_faltas.TabIndex = 22;
            this.lbl_faltas.Text = "Dias Faltas";
            // 
            // frmHorista
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1054, 522);
            this.Controls.Add(this.tb_faltas);
            this.Controls.Add(this.lbl_faltas);
            this.Controls.Add(this.tb_data_entrada_empresa);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.h1);
            this.Controls.Add(this.btn_instanciar_horista);
            this.Controls.Add(this.tb_numero_horas);
            this.Controls.Add(this.tb_salario_hora);
            this.Controls.Add(this.tb_nome);
            this.Controls.Add(this.tb_matricula);
            this.Controls.Add(this.lbl_numero_horas);
            this.Controls.Add(this.lbl_salario_mensal);
            this.Controls.Add(this.lbl_nome);
            this.Controls.Add(this.lbl_matricula);
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.Name = "frmHorista";
            this.Text = "frmHorista";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_instanciar_horista;
        private System.Windows.Forms.TextBox tb_numero_horas;
        private System.Windows.Forms.TextBox tb_salario_hora;
        private System.Windows.Forms.TextBox tb_nome;
        private System.Windows.Forms.TextBox tb_matricula;
        private System.Windows.Forms.Label lbl_numero_horas;
        private System.Windows.Forms.Label lbl_salario_mensal;
        private System.Windows.Forms.Label lbl_nome;
        private System.Windows.Forms.Label lbl_matricula;
        private System.Windows.Forms.Label h1;
        private System.Windows.Forms.TextBox tb_data_entrada_empresa;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox tb_faltas;
        private System.Windows.Forms.Label lbl_faltas;
    }
}